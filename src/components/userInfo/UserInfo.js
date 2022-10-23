import css from './UserInfo.module.css'


const UserInfo = () => {
    return (
        <div>
            <h3>Made by Humennyi Yurii</h3>
            <div className={css.main}>
                <h3>I study in -   </h3>
                <p><a href="https://owu.com.ua/kurs-java"><img className={css.img} src="https://owu.com.ua/image/logo/Blue-Big-Bird-Final-Logo.png"
                                                                                  alt=""/></a></p>
            </div>


        </div>
    );
};

export  {UserInfo};