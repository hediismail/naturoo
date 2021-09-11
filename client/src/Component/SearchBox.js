import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const SearchBox = ({submitHandler}) => {


  return (
    <Form >
      <Form.Control
        type="text"
        name="q"
        onChange={submitHandler}
        placeholder="Search ..."
        className="mr-sm-2 ml-sm-5"
      ></Form.Control>
      <Button type="submit" variant="outline-success" className="p-2">
        Search
      </Button>
    </Form>
  )
}

export default SearchBox