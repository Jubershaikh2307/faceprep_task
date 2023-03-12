import axios from 'axios';
import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

const Home = () => {

    const [count, setCount] = useState(1)

    const [data, setdata] = useState([])

    const fetchData = () => {
        axios.get(`https://randomuser.me/api/?page=${count}&results=25`)
            .then((res) => {
                setdata(prev=>[...prev,...res.data.results])
            }).catch((err) => {
                console.log(err)
            })
        console.log(count)
    }

    const handleinfinity = async () => {
        try {
            // console.log(document.documentElement.scrollHeight,document.documentElement.scrollTop,window.innerHeight)
            if(window.innerHeight + document.documentElement.scrollTop >=  document.documentElement.scrollHeight){
                setCount(prev => prev + 1)
            }
            

        } catch (error) {

        }
    }

    useEffect(() => {
        fetchData()
    }, [count])

    useEffect(() => {
        window.addEventListener("scroll", handleinfinity)
        return () => window.removeEventListener("scroll",handleinfinity)
    }, [])

    console.log(data)

    return (
        <div className="d-flex flex-column" style={{ padding: "50px" }}>
            {
                data && data.map((el, index) => {
                    return (
                        <div className="d-flex flex-row m-auto" key={index.toString()}>
                            <h4>{el.name.title} {el.name.first} {el.name.last}</h4>
                            <img src={el.picture.thumbnail} alt="" className='img-fluid rounded-circle' />
                        </div>
                    )
                })
            }
        </div >
    );
};

export default Home;