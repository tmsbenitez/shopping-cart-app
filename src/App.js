import { Component } from "react";
import Products from "./components/Products";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";

class App extends Component {
  state = {
    products: [
      {
        name: "Maya",
        year: 2020,
        price: 25,
        img: "/products/maya.png",
        songs: ["Brand E", "Usbrup Pensol"],
      },
      {
        name: "Enclosure",
        year: 2014,
        price: 25,
        img: "/products/enclosure.png",
      },
      {
        name: "PBX Funicular Intaglio Zone",
        year: 2012,
        price: 25,
        img: "/products/pbx.png",
      },
      {
        name: "Omar Rodríguez-López & John Frusciante",
        year: 2010,
        price: 25,
        img: "/products/omar-and-john.png",
      },
      {
        name: "The Empyrean",
        year: 2009,
        price: 25,
        img: "/products/the-empyrean.png",
      },
      {
        name: "Shadows Collide With People",
        year: 2004,
        price: 25,
        img: "/products/shadows-collide-with-people.png",
      },
      {
        name: "The Will To Death",
        year: 2004,
        price: 25,
        img: "/products/the-will-to-death.png",
      },
      {
        name: "Inside of Emptiness",
        year: 2004,
        price: 25,
        img: "/products/inside-of-emptiness.png",
      },
      {
        name: "Curtains",
        year: 2004,
        price: 25,
        img: "/products/curtains.png",
      },
      {
        name: "A Sphere In The Heart Of Silence",
        year: 2004,
        price: 25,
        img: "/products/a-sphere-in-the-heart-of-silence.png",
      },
      {
        name: "To Record Only Water For Ten Days",
        year: 2001,
        price: 25,
        img: "/products/to-record-only-water-for-ten-days.png",
      },
      {
        name: "Niandra Lades and Usually Just a T-Shirt",
        year: 1994,
        price: 25,
        img: "/products/niandra-lades-and-usually-just-a-tshirt.png",
      },
    ],
    cart: [],
    isCartVisible: false,
    search: "",
    history: [],
  };

  inputValue = () => {};

  addToCart = (product) => {
    const { cart } = this.state;
    if (cart.find((x) => x.name === product.name)) {
      const newCart = cart.map((x) =>
        x.name === product.name ? { ...x, amount: x.amount + 1 } : x
      );
      return this.setState({ cart: newCart });
    }
    return this.setState({
      cart: this.state.cart.concat({
        ...product,
        amount: 1,
      }),
    });
  };

  showCart = () => {
    if (!this.state.cart.length) {
      return;
    }
    this.setState({ isCartVisible: !this.state.isCartVisible });
  };

  render() {
    const { isCartVisible } = this.state;
    return (
      <div>
        <Navbar
          cart={this.state.cart}
          isCartVisible={isCartVisible}
          showCart={this.showCart}
        />
        <Banner />
        <Products addToCart={this.addToCart} products={this.state.products} />
      </div>
    );
  }
}

export default App;
