'use client'
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Импортируем useRouter из next/router
import styles from "../styles/page.module.css";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const router = useRouter(); // Получаем экземпляр маршрутизатора с помощью useRouter
  const handlePasswordChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSignIn = async () => {

    console.log("Email:", email);
    console.log("Password:", password);
    const postData = {
      userEmail: email,
      userPassword: password
    };
    try {
      const response = await fetch('/api/signIn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });
      if (response.ok) {
        const data = await response.json();
        console.log('User:', data);
        // Перенаправляем на страницу приборной панели
        router.push(`/${data.user.id}/dashboard`); // Используем router.push для навигации
      } else {
        console.error('Error signing in:', response.statusText);
        // Обработка ошибки
      }
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.signInContainer}>
        <div className={styles.header}>
          <div className={styles.iconContainer}>
            <img
              alt="Icon"
              src={
                "https://as2.ftcdn.net/jpg/03/72/65/59/500_F_372655973_OuMRE2PcNwkMOSInLWrKA0j9e7vo4jVJ.jpg"
              }
              className={styles.icon}
            />
            <p>Erp system</p>
          </div>
          <div className={styles.signUpContainer}>
            <button className={styles.signUp}>Sign Up</button>
          </div>
        </div>
        <div className={styles.title}>
          <p>Welcome back!!</p>
          <h2>Please Sign In</h2>
        </div>
        <div className={styles.inputsContainer}>
          <p>Email</p>
          <input
            className={styles.input}
            type="text"
            placeholder="Enter email address"
            value={email}
            onChange={handleEmailChange}
          />
          <p>Password</p>
          <input
            className={styles.input}
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
          />
          <Link href="/">
            <p>I forgot my password</p>
          </Link>
          <div>
            <button className={styles.signIn} onClick={handleSignIn}>
              Sign In
            </button>
          </div>
        </div>
      </div>
      <div className={styles.ImageContainer}>
        <img
          className={styles.Image}
          src={
            "https://as2.ftcdn.net/jpg/03/72/65/59/500_F_372655973_OuMRE2PcNwkMOSInLWrKA0j9e7vo4jVJ.jpg"
          }
          alt="BlackEngineer"
        />
      </div>
    </div>
  );
}
