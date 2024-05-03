import config from '../../config.json';

import { Component } from 'react';
import { useLoaderData } from 'react-router-dom';

import PassForm from '../../forms/PassForm';
import { getPassById } from '../../utils/passApi';


export async function loader({params}) {
  let passObj = getPassById(params.passId)
  return(passObj)
}

export default function UpdatePass() {

  const passObj = useLoaderData();
  console.log(passObj);

  return(
    <PassForm passObj={passObj} />
  )
}