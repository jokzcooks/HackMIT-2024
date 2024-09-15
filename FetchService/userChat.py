from uagents import Agent, Context, Model
def fetch_ai_chatbot(summary1, summary2):
  
    
        
        
        
    
    class Prompt(Model):
        context: str
        text: str


    class Response(Model):
        text: str


    AGENT_MAILBOX_KEY = '64e3a511-ecbb-4e51-9197-d15284aae5d0'
    agent = Agent(name="chatgpt name", seed="chatgpt api agent asdijasiohfasiofa", mailbox=f"{AGENT_MAILBOX_KEY}@https://agentverse.ai",)
    print(agent.address)

    AI_AGENT_ADDRESS = "agent1qvyrg0578tm2ekua44gnyqmgf99wemp4q8mamatvkg5kvgepsh2fz3e24xk"



    
    
    prompt = Prompt(
        context= "You are a team maker for a hackathon. You are provided a profile of 2 people. Analyse deeply their skills, how they will be fit for each other or not technically and developemnt wise. do their goals from the event align. arey they interested in the same thing etc. F",
        text='''You are a team strength analyzer.

        Hey [name1], [name2],

        I feel you're a great match because:

        Details are provided below. Please provide in-depth reasons, judging on both of their personalities, strengths, vision, etc.
        (keep the reasons concise)
        [Reason 1 - based on personality traits]
        [Reason 2 - based on strengths and skills]
        [Reason 3 - based on shared vision and goals]
        You have a match percentage of [percentage].

        Get hacking!!

        Instructions:
        Replace [name1] and [name2] with the actual names of the individuals.
        Fill in the [Reason 1], [Reason 2], and [Reason 3] sections with specific insights based on the individuals' attributes.
        Determine and specify the [percentage] based on how well they complement each other.
        Feel free to share the details you have for each person if you need help completing the prompt! ,''' +
        "User1:"+summary1+"/n user2:"+summary2)


    @agent.on_event("startup")
    async def send_message(ctx: Context):
        await ctx.send(AI_AGENT_ADDRESS, prompt)


    @agent.on_message(Response)
    async def handle_response(ctx: Context, sender: str, msg: Response):
        ctx.logger.info(f"Received response from {sender}: {msg.text}")
       # ctx.stop() make this stop

    agent.run()
    return Response.text
    
        
if __name__ == "__main__":
    #get summaries from database
    summary1=("Name: Cole Nangle\nClass Year: December 2024\nExperience Level: Pro\nSkillset:\nLanguages: JavaScript, Python, C, Go, Java, R\nFrameworks: Express, Electron, Wails, Bootstrap, Angular.js, VueJS, jQuery\nDatabase: MongoDB, Redis, Cassandra, MSSQL, PostgreSQL\nOther: React, Forge, WASM, Webpack, JWT, Figma, CAD\nShort Bio: Cole Nangle is a detail-oriented software/web developer with over 4 years of experience, specializing in developing secure applications and exploiting vulnerabilities. He has led a successful consulting firm, won top national awards in web exploitation and competitive hacking, and currently pursues a Computer Science degree at the University of Georgia.")
    summary2=("xyz, introvert, ideator, frontend person")
    ans=fetch_ai_chatbot(summary1,summary2)
    print(ans)
    #push asn into database
        