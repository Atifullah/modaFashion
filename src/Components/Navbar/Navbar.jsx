import React from "react";
const  Navbar = ()=>  {

return(
<div>
<div className="col-6 col-sm-6 col-md-6 col-lg-2 d-block d-lg-none mobile-logo">
                	<div className="logo">
                        <a href="index.html">
                            <img src="images/logo.svg" alt="Belle Multipurpose Html Template" title="Belle Multipurpose Html Template" />
                        </a>
                    </div>
                </div>
         
                <div className="col-4 col-sm-3 col-md-3 col-lg-2">
                	<div className="site-cart">
                    	<a href="#;" className="site-header__cart" title="Cart">
                        	<i className="icon anm anm-bag-l"></i>
                            <span id="CartCount" className="site-header__cart-count" data-cart-render="item_count">2</span>
                        </a>
                 
                        <div id="header-cart" className="block block-cart">
                        	<ul className="mini-products-list">
                                <li className="item">
                                	<a className="product-image" href="#">
                                    	<img src="assets/images/product-images/cape-dress-1.jpg" alt="3/4 Sleeve Kimono Dress" title="" />
                                    </a>
                                    <div className="product-details">
                                    	<a href="#" className="remove"><i className="anm anm-times-l" aria-hidden="true"></i></a>
                                        <a href="#" className="edit-i remove"><i className="anm anm-edit" aria-hidden="true"></i></a>
                                        <a className="pName" href="cart.html">Sleeve Kimono Dress</a>
                                        <div className="variant-cart">Black / XL</div>
                                        <div className="wrapQtyBtn">
                                            <div className="qtyField">
                                            	<span className="label">Qty:</span>
                                                <a className="qtyBtn minus" href="javascript:void(0);"><i className="fa anm anm-minus-r" aria-hidden="true"></i></a>
                                                <input type="text" id="Quantity" name="quantity" value="1" className="product-form__input qty"/>
                                                <a className="qtyBtn plus" href="javascript:void(0);"><i className="fa anm anm-plus-r" aria-hidden="true"></i></a>
                                            </div>
                                        </div>
                                        <div className="priceRow">
                                        	<div className="product-price">
                                            	<span className="money">$59.00</span>
                                            </div>
                                         </div>
									</div>
                                </li>
                                <li className="item">
                                	<a className="product-image" href="#">
                                    	<img src="assets/images/product-images/cape-dress-2.jpg" alt="Elastic Waist Dress - Black / Small" title="" />
                                    </a>
                                    <div className="product-details">
                                    	<a href="#" className="remove"><i className="anm anm-times-l" aria-hidden="true"></i></a>
                                        <a href="#" className="edit-i remove"><i className="anm anm-edit" aria-hidden="true"></i></a>
                                        <a className="pName" href="cart.html">Elastic Waist Dress</a>
                                        <div className="variant-cart">Gray / XXL</div>
                                        <div className="wrapQtyBtn">
                                            <div className="qtyField">
                                            	<span className="label">Qty:</span>
                                                <a className="qtyBtn minus" href="javascript:void(0);"><i className="fa anm anm-minus-r" aria-hidden="true"></i></a>
                                                <input type="text" id="Quantity" name="quantity" value="1" className="product-form__input qty"/>
                                                <a className="qtyBtn plus" href="javascript:void(0);"><i className="fa anm anm-plus-r" aria-hidden="true"></i></a>
                                            </div>
                                        </div>
                                       	<div className="priceRow">
                                            <div className="product-price">
                                                <span className="money">$99.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div className="total">
                            	<div className="total-in">
                                	<span className="label">Cart Subtotal:</span><span className="product-price"><span className="money">$748.00</span></span>
                                </div>
                                 <div className="buttonSet text-center">
                                    <a href="cart.html" className="btn btn-secondary btn--small">View Cart</a>
                                    <a href="checkout.html" className="btn btn-secondary btn--small">Checkout</a>
                                </div>
                            </div>
                        </div>
                    
                    </div>
                    <div className="site-header__search">
                    	<button type="button" className="search-trigger"><i className="icon anm anm-search-l"></i></button>
                    </div>
                </div>
        	</div>
 
                          
);


}
export default Navbar;