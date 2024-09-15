# connect to database
# get information of the person strored resume scraped
import fetch_ai_gpt
def fetch_user_details_from_db():
    # Example users fetched from the database, each with a unique ID and details in form of a list [{id=1,details=""}]
    lst=[{"id":1,"details":"Backend,junior,cs lover"},{"id":2,"details":"frontend,junior,data science"}]
    return lst
        


details=""
class User:
    def __init__(self, user_id, name, experience, skills):
        self.user_id = user_id
        self.details=details
        
        
def rank_users_based_on_similarity(target_user, all_users):
    similarity_list = []
    index=1
    for user in all_users:
        if all_users[index]["id"]!=target_user["id"]:
            # Fetch AI similarity score between target_user and current user
            score = fetch_ai_gpt.fetch_ai(target_user["details"], all_users[index]["details"])
            similarity_list.append({"id":all_users[index]["id"], "score": score})
        index+=1
    
    # Sort the similarity list from highest to lowest based on the 'score'
    similarity_list.sort(key=lambda x: x['score'], reverse=True)
    
    # Return sorted list of users with similarity scores
    return similarity_list

def main():
    # Fetch user details from database (simulated)
    raw_user_data = fetch_user_details_from_db()

    # Convert raw data to User objects
    #users = [User(user['id'], user['name'], user['experience'], user['skills']) for user in raw_user_data]
    
    # Choose a target user to compare with others (for this example, we choose the first user)
    target_user = raw_user_data[0]
    
    # Rank all users based on similarity to the target user
    ranked_users = rank_users_based_on_similarity(target_user, raw_user_data)
    print(ranked_users) #------> use this rating list to pull out team members on display board
if __name__ == "__main__":
    main()