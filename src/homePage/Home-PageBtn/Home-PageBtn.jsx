/**
 * @author Greg Vincent
 * @date 5/18/22
 *Input form for the homepage
 */

import "./Home-PageBtn.css";

/**
 * whenever a user inputs their name/password
 * pass it to doorloops api and log them in
 */
function handleClick(event) {
  event.preventDefault();
  //placeholder link to doorloop.
  window.open("https://www.doorloop.com/");
}

/**
 *
 */
function HomePageBtn() {
  return (
    <div className="btn-contaner">
      <form>
        <h3 className=" h3 fade-in">
          Tenants, click the link below to see your information.
        </h3>
        <button
          type="submit"
          className="fade-in submitBtn"
          onClick={handleClick}
        >
          Access My Info
        </button>
      </form>
    </div>
  );
}

export default HomePageBtn;
