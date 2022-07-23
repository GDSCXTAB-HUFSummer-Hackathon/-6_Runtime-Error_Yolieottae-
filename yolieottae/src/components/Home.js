import image01 from "../img/01.jpg";
import image02 from "../img/02.jpg";
import image03 from "../img/03.jpg";
import { examWrite } from "../utils/firebaseConfig";
import Header from "./Header";
import NavigationBar from "./NavigationBar";

function Home() {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Header></Header>
      <section id="scroll">
        <div class="container px-5">
          <div class="row gx-5 align-items-center">
            <div class="col-lg-6 order-lg-2">
              <div class="p-5">
                <img class="img-fluid rounded-circle" src={image01} alt="..." />
              </div>
            </div>
            <div class="col-lg-6 order-lg-1">
              <div class="p-5">
                <h2 class="display-4">For those about to rock...</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                  aliquid, mollitia odio veniam sit iste esse assumenda amet
                  aperiam exercitationem, ea animi blanditiis recusandae!
                  Ratione voluptatum molestiae adipisci, beatae obcaecati.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="container px-5">
          <div class="row gx-5 align-items-center">
            <div class="col-lg-6">
              <div class="p-5">
                <img class="img-fluid rounded-circle" src={image02} alt="..." />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="p-5">
                <h2 class="display-4">We salute you!</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                  aliquid, mollitia odio veniam sit iste esse assumenda amet
                  aperiam exercitationem, ea animi blanditiis recusandae!
                  Ratione voluptatum molestiae adipisci, beatae obcaecati.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="container px-5">
          <div class="row gx-5 align-items-center">
            <div class="col-lg-6 order-lg-2">
              <div class="p-5">
                <img class="img-fluid rounded-circle" src={image03} alt="..." />
              </div>
            </div>
            <div class="col-lg-6 order-lg-1">
              <div class="p-5">
                <h2 class="display-4">Let there be rock!</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                  aliquid, mollitia odio veniam sit iste esse assumenda amet
                  aperiam exercitationem, ea animi blanditiis recusandae!
                  Ratione voluptatum molestiae adipisci, beatae obcaecati.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer class="py-5 bg-black">
        <div class="container px-5">
          <p class="m-0 text-center text-white small">
            Copyright &copy; Your Website 2022
          </p>
        </div>
      </footer>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
      <script src="js/scripts.js"></script>
    </div>
  );
}

export default Home;
