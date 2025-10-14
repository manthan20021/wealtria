
import About from "./(root)/website/about-page/page";
import BlogPage from "./(root)/website/blog-page/page";
import LandingPage from "./(root)/website/landing-page/page";
import Services from "./(root)/website/services-page/page";


export default function Home() {
  return (
    <div>
      <LandingPage/>
      <About/>
      <BlogPage/>
      <Services/>
    </div>
  );
}
