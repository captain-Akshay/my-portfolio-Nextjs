import Image from "next/image";
import Link from "next/link";
import classes from "./post-item.module.css";
export default function PostItem(props) {
  const { title, image, excerpt, date, slug } = props.post;
  const formattedTime = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const imagePath = `/images/posts/${slug}/${image}`;
  // console.log(imagePath);
  const linkPath = `/posts/${slug}`;
  return (
    <li className={classes.post}>
      <Link href={linkPath}>
        <div className={classes.image}>
          {" "}
          <Image
            width={500}
            height={200}
            alt="some image"
            src={imagePath}
            style={{ layout: "responsive" }}
          />
        </div>
      </Link>
      <div className={classes.content}>
        <h3>{title}</h3>
        <time>{formattedTime}</time>
        <p>{excerpt}</p>
      </div>
    </li>
  );
}
