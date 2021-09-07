const MainFooter =()=>{
    return(
        <footer>
          <div className="container">
            <footer className="py-3 my-4">
              <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                
                <li className="nav-item">
                  <a href="/fb">
                    <span className="fa-stack fa-lg">
                      <i className="fas fa-circle fa-stack-2x"></i>
                      <i className="fab fa-facebook-f fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                </li>

                <li className="nav-item">
                  <a href="/tw">
                    <span className="fa-stack fa-lg">
                      <i className="fas fa-circle fa-stack-2x"></i>
                      <i className="fab fa-twitter fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                </li>

                <li className="nav-item">
                  <a href="/gh">
                    <span className="fa-stack fa-lg">
                      <i className="fas fa-circle fa-stack-2x"></i>
                      <i className="fab fa-github fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                </li>
                
              </ul>
              <p className="text-center text-muted">&copy; 2021 Company, Inc</p>
            </footer>
          </div>
        </footer> 
    )
}

export default MainFooter;