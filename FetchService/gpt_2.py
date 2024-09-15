from uagents import Agent, Context, Model


class Prompt(Model):
    context: str
    text: str


class Response(Model):
    text: str


AGENT_MAILBOX_KEY = '64e3a511-ecbb-4e51-9197-d15284aae5d0'
agent = Agent(name="chatgpt name", seed="chatgpt api agent asdijasiohfasiofa", mailbox=f"{AGENT_MAILBOX_KEY}@https://agentverse.ai",)
print(agent.address)

AI_AGENT_ADDRESS = "agent1qvyrg0578tm2ekua44gnyqmgf99wemp4q8mamatvkg5kvgepsh2fz3e24xk"


code = """
    def do_something():
        for i in range(10)
            pass
    """
import pdftotext
filename="Kanika Gupta kxg5522.pdf"
resume=pdftotext.PDFTextExtractor(filename)
resume_text=resume.pdf_text_extract()
prompt = Prompt(
    context= "You are a onboarding guide for a person creating an account for a hackathon team making application. You are provided with a resume and as a crtic give the given information ",
    text='''Please analyze the following resume text and extract the following information in the specified format:

            Name:
            Class Year:
            Experience Level: Beginner/ Intermediate/ Pro
            Skillset:
            Short Bio:
            Here is the resume text: ''' + resume_text)


@agent.on_event("startup")
async def send_message(ctx: Context):
    await ctx.send(AI_AGENT_ADDRESS, prompt)


@agent.on_message(Response)
async def handle_response(ctx: Context, sender: str, msg: Response):
    ctx.logger.info(f"Received response from {sender}: {msg.text}")


if __name__ == "__main__":
    
    agent.run()
    # return Response.text