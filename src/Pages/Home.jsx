import axios from 'axios';
import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

const Home = () => {

    const [count, setCount] = useState(1)

    const [data, setdata] = useState([])

    const [loading,setLoading]=useState(true)

    const fetchData = () => {
        axios.get(`https://randomuser.me/api/?page=${count}&results=25`)
            .then((res) => {
                setdata(prev => [...prev, ...res.data.results])
                setLoading(false)
            }).catch((err) => {
                console.log(err)
            })
    }

    const handleinfinity = async () => {
        try {
            // console.log(document.documentElement.scrollHeight,document.documentElement.scrollTop,window.innerHeight)
            if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.scrollHeight) {
                setCount(prev => prev + 1)
            }
        } catch (error) {

        }
    }

    useEffect(() => {
        document.body.style = 'background-image: url("https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000");';
        document.title="Login"
        fetchData()
    }, [count])

    useEffect(() => {
        window.addEventListener("scroll", handleinfinity)
        return () => window.removeEventListener("scroll", handleinfinity)
    }, [])

    return (
        <div className="d-flex flex-column" style={{ padding: "50px" }}>
            {
                loading ? <h1>Loading...</h1> : 
                data && data.map((el, index) => {
                    return (
                        <>
                            <div className="d-flex flex-row m-auto" style={{padding:"20px"}} key={index}>
                                <h4>{el.name.title} {el.name.first} {el.name.last}</h4>
                                <img src={el.picture.thumbnail} style={{marginLeft:"20px"}} alt="" className='img-fluid rounded-circle' />
                            </div>
                        </>
                    )
                })
            }
        </div >
    );
};

export default Home;