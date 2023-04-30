import '../Home.css';
const Home = () => {
    return (
        <>
            <main>
                <section>
                    <em>T-Shirt Store</em>
                    <h1 className="title">T - Shirts for Every Mood and Occasion</h1>
                    <button type="button" className="btn btn-outline-info">Learn More</button>
                </section>
            </main>

            <div className="section6">
                <section>
                    <span>
                        <img src="https://i.postimg.cc/tJ05FCJY/icon-4.png" alt="" />
                        <p>(+x) xxxx xxxxx</p>
                    </span>
                    <span>
                        <img src="https://i.postimg.cc/bvBLNRj0/icon-5.png" alt="" />
                        <p>support@websitename.com</p>
                    </span>
                    <span>
                        <img src="https://i.postimg.cc/B6Pp81qr/icon-6.png" alt="" />
                        <p>Campus, Ramana, S. No. 103, Shahu College Rd,<br /> Parvati, Pune, Maharashtra 411009</p>
                    </span>
                </section>
            </div>
        </>
    )
}

export default Home;