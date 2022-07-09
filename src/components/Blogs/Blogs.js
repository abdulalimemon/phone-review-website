import React from 'react';

const Blogs = () => {

    return (
        <div className="container">
            <h2 className="py-5 fw-bolder fs-2">Our Blogs</h2>
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title">What Is Semantic Tag.</h3>
                            <p className="card-text">A semantic element clearly describes its meaning to both the browser and the developer. Non-semantic elements Tell nothing about its content. Meanwhile, semantic elements Clearly define its content. Some Example of non-semantic elements: &lt;div&gt; and &lt;span&gt;, Examples of semantic elements: &lt;nav&gt;, &lt;footer&gt; and &lt;section&gt;. The &lt;footer&gt; element defines footer section in a document. &lt;nav&gt; Defines navigation links on a website. The Semantic element allows data to be shared and reused with applications, enterprises, and communities.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="card mt-5">
                        <div className="card-body">
                            <h3 className="card-title">Difference between Block and Inline element.</h3>
                            <p className="card-text">A block element always starts on a new line, and the browsers automatically add some margin before and after the element. A block element always takes the full width. Some Example of Block-level elements &lt;div&gt; , &lt;h2&gt; and &lt;p&gt;. A block element can contain inline elements.
                                <br />
                                An inline element dose not starts on a new line.It takes only the necessary width. Some Example of inline elements &lt;span&gt; , &lt;button&gt; and &lt;small&gt;. Inline element can not contain a block-level element.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;