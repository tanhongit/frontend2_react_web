import React, { useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorite, removeFavorite } from '../actions/favoriteAction';
import Cookie from 'js-cookie';
import { addToCart } from '../actions/cartAction';

function FavoriteScreen(props) {

  const favorite = useSelector(state => state.favorite);

  const { favoriteItems } = favorite;

  const productId = props.match.params.id;

  const dispatch = useDispatch();

  useEffect(() => {
    if (productId) {
      dispatch(addToFavorite(productId));
    }
  }, []);

  const removeFromFavoriteHandler = (productId) => {
    dispatch(removeFavorite(productId));
  }

  let history = useHistory();
  const deleteThisFavorite = () => {
    Cookie.remove("favoriteItems");
    history.push('/favorite/1')
    window.location.reload();
  }

  const addAllItemToCart = addAllItemCart()

  return (
    <>
      <main className="ps-main">
        <div className="container" style={{ paddingTop: 50 }}>
          <div style={{ textAlign: "center", paddingBottom: 20, fontWeight: "bold", fontSize: 40 }}>Favorite</div>
          <div className="ps-products" data-mh="product-listing">
            <div className="ps-product__columns">
              {
                favoriteItems.length === 0 ?
                  <div style={{ textAlign: "center", paddingBottom: 20, fontWeight: "bold", fontSize: 40 }} className="cart-is-empty"><h2>Favorite is empty</h2></div>
                  :
                  favoriteItems.map(product =>
                    <div className="ps-product__column">
                      <div className="ps-shoe mb-30">
                        <div className="ps-shoe__thumbnail">
                          <a className="ps-shoe__favorite" onClick={() => removeFromFavoriteHandler(product.product)}>
                            <i className="fa fa-times" />
                          </a>
                          <Link to={'/product/' + product._id}><img src={"/images/products/" + product.image} alt='product' /></Link>
                          <a className="ps-shoe__overlay" href={'/product/' + product.product} />
                        </div>
                        <div className="ps-shoe__content">
                          <div class="ps-shoe__variants">
                            {product.countInStock >= 1 ?
                              <a href={"/cart/" + product.product + "?qty=1"} className='ps-btn btn btn-primary btn-add-to-cart-home'>Add to Cart</a>
                              : <button disabled className="btn btn-info">Out of stock</button>}
                          </div>
                          <div className="ps-shoe__detail">
                            <a className="ps-shoe__name" href={'/product/' + product.product}>
                              {product.name}
                            </a>
                            <p className="ps-shoe__categories">
                              Cate: <a href="#">{product.category}</a>, Brand: <a href="#">{product.brand}</a>.
                        </p>
                            <span style={{ paddingTop: 15 }} className="ps-shoe__price"> <Link to={'/product/' + product.product}>{product.price} Đ</Link></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
              }
            </div>
            <div style={{ textAlign: "center" }} className="ps-cart__actions">
              <div className="ps-cart__total">
                <a href='/' className="ps-btn ps-btn--gray" style={{ textAlign: "center" }}>Continue Shopping</a>
                <button disabled={favoriteItems.length === 0} onClick={() => { if (window.confirm('Are you sure delete this favorite?')) deleteThisFavorite() }} className="ps-btn ps-btn--gray" style={{ textAlign: "center" }}>Delete This Favorites</button>
                <button className="ps-btn" disabled={favoriteItems.length === 0} onClick={addAllItemToCart}>
                  Add to Cart All <i className="ps-icon-next" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main >
    </>
  );

  function addAllItemCart() {
    return () => {
      favoriteItems.map(item => dispatch(addToCart(item.product, 1))
      );
      props.history.push('/cart');
    };
  }
}
export default FavoriteScreen;
