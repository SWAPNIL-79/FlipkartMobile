import "./Mobile.css"

function Mobile({image, name, fn1, fn2, fn3, fn4, fn5, price, oldPrice, off}) {
  return(
    <>
      <div id="parent">
        <div id="child1">
          <img src={image} alt="image not loaded"/>
        </div>
        <div id="child2">
          <h1>{name}</h1>
          <ul>
            <li>{fn1}</li>
            <li>{fn2}</li>
            <li>{fn3}</li>
            <li>{fn4}</li>
            <li>{fn5}</li>
          </ul>
        </div>
        <div id="child3">
          <h2>&#8377;{price}</h2>
          <del>&#8377;{oldPrice}</del>
          <p>{off}</p>
        </div>
      </div>
    </>
  )
}
export default Mobile;