import React from 'react'
import FormInput from '../components/formInput'
import List from '../components/list'
import Footer from '../components/footer'
export default function home2() {
    return (
        <DataProvider>
        <div>
        <h1>To Do List</h1>
        <FormInput />
        <List />
        <Footer /> 
        </div>
        </DataProvider>
    )
}
