import {Link} from 'react-router-dom'
import './index.css'

const EmptyCartView = () => (
  <>
    <div className="cart-empty-view-container">
      <img
        src="https://res.cloudinary.com/dpnobkqmw/image/upload/v1634289365/Layer_2_jt1ls9.png"
        className="cart-empty-image"
        alt="empty cart"
      />
      <h1 className="cart-empty-heading">No Order Yet!</h1>
      <p className="cart-empty-description">
        Your cart is empty. Add something from the menu.
      </p>
      <Link to="/">
        <button type="button" className="shop-now-btn">
          Order Now
        </button>
      </Link>
    </div>
  </>
)

export default EmptyCartView