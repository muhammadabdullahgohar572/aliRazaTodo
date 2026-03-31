async function Taketime() {
  await new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });
}

const About = async () => {
  await Taketime();
  return (
    <>
      <h1 className="text-center font-extrabold text-8xl">Hello World</h1>
    </>
  );
};

export default About;
