import {
  Anchor,
  Button,
  Checkbox,
  Divider,
  Group,
  Paper,
  PasswordInput,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { upperFirst, useToggle } from "@mantine/hooks";
import React from "react";
import { GoogleButton } from "../GoogleButton";
import { TwitterButton } from "../TwitterButton";
import "./index.css"
import { Navigate } from "react-router";

export function AuthForm(props) {
  const [type, toggle] = useToggle(["login", "register"]);
  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      password: "",
      terms: true,
    },
    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
      password: (val) =>
        val.length <= 6
          ? "Password should include at least 6 characters"
          : null,
    },
  });

  const handleAuth = async () => {
    if (form.validate().hasErrors == true) return

    console.log(JSON.stringify({type, ...form.values}))
    const res = await fetch("http://localhost:5000/handleAuth", {
      method: 'POST',
      body: JSON.stringify({type, ...form.values}),
      headers: {
        "content-type": "application/json"
      }
    });

    if (res.status != 200) {
      throw new Error('An error occured while authenticating');
    }

    console.log(await res.json())
    window.location.href = "/resume"
  }

  return (
    <Paper style={{"textAlign": "left !important"}} radius="md" p="xl" withBorder {...props}>
      <Text size="lg" fw={500}>
        Please {type} to continue
      </Text>

      <Divider label="" labelPosition="center" my="lg" />

      <form onSubmit={form.onSubmit(() => {})}>
        <Stack align="stretch"> {/* Ensures child elements take full width */}
          {type === "register" && (
            <TextInput
              label="Name"
              placeholder="Your name"
              value={form.values.name}
              onChange={(event) =>
                form.setFieldValue("name", event.currentTarget.value)
              }
              radius="md"
              labelProps={{ style: { textAlign: "left", marginBottom: "0.5rem" } }} // Aligns label to top-left
            />
          )}

          <TextInput
            required
            label="Email"
            placeholder="hello@mantine.dev"
            value={form.values.email}
            onChange={(event) =>
              form.setFieldValue("email", event.currentTarget.value)
            }
            error={form.errors.email && "Invalid email"}
            radius="md"
            labelProps={{ style: { textAlign: "left", marginBottom: "0.5rem" } }} // Aligns label to top-left
          />

          <PasswordInput
            required
            label="Password"
            placeholder="Your password"
            value={form.values.password}
            onChange={(event) =>
              form.setFieldValue("password", event.currentTarget.value)
            }
            error={
              form.errors.password &&
              "Password should include at least 6 characters"
            }
            radius="md"
            labelProps={{ style: { textAlign: "left", marginBottom: "0.5rem" } }} // Aligns label to top-left
          />

          {type === "register" && (
            <Checkbox
              label="I accept terms and conditions"
              checked={form.values.terms}
              onChange={(event) =>
                form.setFieldValue("terms", event.currentTarget.checked)
              }
            />
          )}
        </Stack>

        <Group justify="space-between" mt="xl">
          <Anchor
            component="button"
            type="button"
            c="dimmed"
            onClick={() => toggle()}
            size="xs"
          >
            {type === "register"
              ? "Already have an account? Login"
              : "Don't have an account? Register"}
          </Anchor>
          <Button onClick={e => handleAuth()} type="submit" color="blue" radius="xl">
            {upperFirst(type)}
          </Button>
        </Group>
      </form>
    </Paper>
  );
}
