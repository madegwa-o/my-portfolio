import styles from './MyProfile.module.css'
import profileImage from '/src/images/oscar.jpeg'
function MyProfile () {

    return (
        <div className={styles.MyProfile}>
            <img src={profileImage} className={styles.ProfileImage} alt="Profile"/>
            <div className={styles.Content}>
                <h1>Hey, i'm <span>Oscar</span></h1>
                <h1>SpringBoot React Web Developer</h1>
                <div>
                    <a href="https://www.linkedin.com/in/oscar-madegwa-528986289" target="_blank">
                        <button>linked in</button>
                    </a>
                    <a href="https://github.com/madegwa-o/" target='_blank'>
                        <button>github</button>
                    </a>
                    <a href="mailto:madegwaoscar327@gmail.com" target='_blank'>
                        <button>Email</button>
                    </a>
                    <a href="https://medium.com/@madegwaoscar317" target='_blank'>
                        <button>Blogs</button>
                    </a>
                </div>
                <p>Hello, I'm Oscar, a Spring Boot and React web developer. Currently pursuing a Bachelor of Science in
                    Computer Science at the University of Karatina, I am dedicated to building efficient, user-focused
                    applications that address real-world challenges with quality and precision.</p>

                <hr/>
            </div>

        </div>
    )
}

export default MyProfile;