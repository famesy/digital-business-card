import Twitter from "../assets/Twitter.png"
import Github from "../assets/Github.png"
import Facebook from "../assets/Facebook.png"
import Instagram from "../assets/Instagram.png"

export default function Footer() {
  return (
    <>
        <footer id="footer">
            <a href="#">
                <img src={Twitter} />
            </a>
            <a href="#">
                <img src={Facebook} />
            </a>
            <a href="#">
                <img src={Instagram} />
            </a>
            <a href="#">
                <img src={Github} />
            </a>
        </footer>
    </>
  )
}