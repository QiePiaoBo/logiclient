import NextCard from "../components/NextCard";

function Blog() {

  return (
    <div className="z-0 w-4/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <NextCard href="/main/article" id="1" common="Test1" />
      <NextCard href="/main/article" id="2" common="Test2"  />
      <NextCard href="/main/article" id="3" common="Test3"  />
      <NextCard href="/main/article" id="4"  />
      <NextCard href="/main/article" id="5"  />
      <NextCard href="/main/article" id="6"  />
      <NextCard href="/main/article" id="7"  />
      <NextCard href="/main/article" id="8"  />
      <NextCard href="/main/article" id="9"  />
      <NextCard href="/main/article" id="10"  />
    </div>
  );
}

export default Blog;
