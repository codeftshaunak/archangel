import Image from "next/image";
import Link from "next/link";
import { newPromptsData } from "@/public/data/new-prompts";

const NewPrompts = () => {
  return (
    <section className="section pb-0 new-prompts fade-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section__header text-start">
              <h2 className="title title-animation mt-12">New Prompts</h2>
            </div>
          </div>
        </div>
        <div className="row gaper">
          {newPromptsData.map((item) => {
            return (
              <div
                className="col-12 col-md-6 col-lg-4 col-xxl-3 fade-top"
                key={item.id}
              >
                <div className="category__single topy-tilt">
                  <div className="thumb">
                    <Link href="product-single" className="thumb-img">
                      <Image src={item.productImage} alt="Image" priority />
                    </Link>
                    <Link href="shop" className="tag">
                      <Image src={item.categoryLogo} alt="Image" priority />
                      {item.category}
                    </Link>
                  </div>
                  <div className="content">
                    <h5>
                      <Link href="product-single">{item.title}</Link>
                    </h5>
                    <p className="tertiary-text">${item.price}</p>
                  </div>
                  <hr />
                  <div className="meta">
                    <div className="meta-info">
                      <div className="meta-thumb">
                        <Image src={item.author} alt="Image" priority />
                      </div>
                      <p className="tertiary-text">{item.authorName}</p>
                    </div>
                    <div className="meta-review">
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                    </div>
                  </div>
                  <div className="cta">
                    <Link href="product-single" className="btn btn--quaternary">
                      Get Prompts
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NewPrompts;
