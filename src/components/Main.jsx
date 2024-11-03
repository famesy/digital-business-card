import Email from "../assets/mail.png"
import LinkedIn from "../assets/linkedin.png"

export default function Main() {
  return (
    <main className="main">
      <h1 className="card-name">Laura Smith</h1>
      <p className="card-role">Frontend Developer</p>
      <a className="card-website" href="#">laurasmith.website</a>
      <div className="buttons">
        <a href="#" className="email-button">
          <img src={Email} alt="Mail logo"/>
          <span>Email</span>
        </a>
        <a href="#" className="linkedin-button">
          <img src={LinkedIn} alt="LinkedIn logo"/>
          <span>LinkedIn</span>
        </a>
      </div>
      <h2 className="card-heading">About</h2>
      <p className="card-paragraph">
        I am a frontend developer with a particular interest in making things
        simple and automating daily tasks. I try to keep up with security and
        best practices, and am always looking for new things to learn.
      </p>
      <h2 className="card-heading">Interests</h2>
      <p className="card-paragraph">
        Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
        Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
      </p>
    </main>
  );
}
