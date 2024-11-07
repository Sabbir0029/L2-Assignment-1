{
    /** 
      Problem 6:
        Define an interface Profile with properties name, age, and email.
        Create a function updateProfile that accepts an object of type Profile and
        an object of type Partial representing the updates. The function should
        return the updated profile.
     **/
    // interface
    interface Profile {
        name: string;
        age: number;
        email: string;
      }
    //   Create a function updateProfile
      function updateProfile(profile: Profile, updates: Partial<Profile>): Profile {
        return { ...profile, ...updates };
      }
      
      const myProfile: Profile = { name: "Alice", age: 25, email: "alice@example.com" };
      const result = updateProfile(myProfile, { age: 26 })
      console.log(result);
      
}