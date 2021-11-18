import User from '../fixtures/User'

class UserFactory {
    userOne() {
        return new User("sam_blogs@webdriveruni.com", "Sam", "Blogs", "Do you provide additional discount on bulk orders?");
    }
    userTwo() {
        return new User("jane_smith@gmail.com", "Jane", "Smith", "Hello. I am looking for the contact of the tech support. Thanks!");
    }

}
export default UserFactory;