from uagents import Agent, Context, Model
def fetch_ai(details1,details2):
  
    def fetch_ai(details1,details2):
        
        
        
        return Response.text
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
        context= "You are a team maker for a hackathon. Given details of two people determine how good team they will form ",
        text='''Give me rating out of 5, how good of pairing would it be for the detail of two people given. Strictly return  a single digit rating between 1 to 5, take into consideration diverse skill set, similar age groups and other relevant information provided. Be critical ''' + "User1:"+details1+"/n user2:"+details2)


    @agent.on_event("startup")
    async def send_message(ctx: Context):
        await ctx.send(AI_AGENT_ADDRESS, prompt)


    @agent.on_message(Response)
    async def handle_response(ctx: Context, sender: str, msg: Response):
        ctx.logger.info(f"Received response from {sender}: {msg.text}")
       # ctx.stop() make this stop

    agent.run()
    return Response.text
    
        
    # if __name__ == "__main__":
    #     fetch_ai("","")
        
        #return Response.text