import "./about.css";

const About = () => {
  return (
    <div className="about my-[100px]">
      <div className="max-container lg:w-full about-container">
        <div className="about-l">
          <div className="about-content">
            <div className="about-title">
              <h1>About Us</h1>
              <span></span>
            </div>
            <p className=" text-[15px] sm:text-[15px] lg:text-[25px] lg:leading-[1.6]">
              First Haven Care Solutions is a family-owned care agency dedicated
              to providing care workers to the domiciliary homes of the under
              65s and over 65s who not only need support in their personal care
              but also general care. We can also be described as a fully-managed
              live-in care agency regulated by the Care Quality Commission (CQC)
              and as a whole, our carers are direct employees of our company,
              which means that the company manages our carer’s pay, benefits,
              holidays and pension. We strive on making client homes a first
              stop haven where they will feel safe always, where they have
              confidence that they will be provided with an excellent and
              professional service.{" "}
            </p>
          </div>
          <div className="about-main">
            <div className="about-mission">
              <h2>Mission</h2>
              <p className="  text-[15px] sm:text-[15px] lg:text-[25px] lg:leading-[1.6]">
                We aim to cater to the under 65s with special needs as well as
                the over 65s with physical disabilities and elderly people
                generally who require assistance in their homes whether it be
                feeding, clothing, bathing, changing, taking them out and
                feeding them.
              </p>
            </div>
          </div>
        </div>
        <div className="about-r flex items-center justify-center">
        <div className="about-vision">
              <h2>Vision</h2>
              <p className="  text-[15px] sm:text-[15px] lg:text-[25px] lg:leading-[1.6]">
                We aim to provide qualified and experienced care workers whose
                aim is to ensure that the clients are comfortable and treated
                well in your own space at home. We want to provide an excellent
                service by catering to their personal needs and at the same time
                ensuring that they retain their dignity. That they are happy
                when they see our staff members enter their homes.
              </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
