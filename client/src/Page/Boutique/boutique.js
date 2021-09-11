import React, { useState } from 'react'
import boutikPrincipal from '../../images/boutikPrincipal.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect} from 'react'
import Navbar from '../../Shared/navbar'
import Footer from '../../Shared/footer'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { getProductAPI } from '../../Redux/Action/productAction'
import './boutique.css'
import Modale from './pageBoutique'
import Rating from '../../Component/Rating'

// Redux
import { connect } from 'react-redux'
import { loadCurrentItem, addToCart } from '../../Redux/Action/orderAction'

const Boutique = ({ boutique }) => {

  const [keyword, setKeyword] = useState('')

    const submitHandler = (e) => {
      setKeyword(e.target.value)
      
    }

  const [qanty, setQanty] = useState(1)
  const dispatch = useDispatch()
  const product = useSelector((state) => state.product.datas)
  useEffect(() => {
    dispatch(getProductAPI())
  }, [dispatch])
  console.log('my data', product)
  return (
    <div>
      <Navbar  onChange={submitHandler}/>
      <div className="parent1">
        <h1 className="fraze">Boutique</h1>

        <div>
          <img className="imagearpop" src={boutikPrincipal} alt="fpage1" />
        </div>

        <div className="Rectang"></div>
      </div>
      <div className="espace" />
      <div className="trending">
        {product
       .filter((el) => el.title.toLowerCase().includes(keyword.toLowerCase()))
        .map((el, key) => (
          <div key={key}>
            <div className="media">
              <img className="poster" src={el.imageUrl} alt="" />

              <div className="phyto-title-parag">
                <Modale id={el._id} el={el} />
                {/* <h6 className="title">{el.title} </h6> */}
                
                <h6 className="title">Prix: {el.price} DT</h6>
                <Rating className="Rating-boutik" rating={el.rating} />
                {/* <ListGroup.Item>
                  <Row> */}
                {/* <Col>Qty</Col>
                <Col>
                  <Form.Control
                    as="select"
                    value={qanty}
                    onChange={(e) => setQanty(e.target.value)}
                  >
                    {[...Array(el.qty).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </Form.Control>
                </Col> */}
                {/* </Row>
                </ListGroup.Item> */}
                <AddShoppingCartIcon className="iconPanier"
                  onClick={() => dispatch(addToCart(el._id, qanty))}
                  //   className={`${styles.buttons__btn} ${styles.buttons__add}`}
                >
                  Add To Cart
                </AddShoppingCartIcon>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
     addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  }
}

export default connect(null, mapDispatchToProps)(Boutique)
