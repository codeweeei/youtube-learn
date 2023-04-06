import React from 'react';
import ReactDOM from 'react-dom';
const books = [
  {
    id: 1,
    img: 'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f369848f8fe84965a2ce402589985230~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?',
    title: '如何用好免费的chartGPT',
    author: '劼哥stone'
  },
  {
    id: 2,
    img: 'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2cc4aaf25d24454c94ac78a880ebb6b9~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?',
    title: 'ChartGPT生态，毁灭人性的一次开源',
    author: '味道'
  }
]
function BookList() {
  return (
    <section>
      {
        books.map((book) => {
          return (
            <Books key={book.id} {...book}></Books>
          )
        })
      }
    </section>
  )
}
const handleDelete = (id) => {
  console.log(id)
  for(let i = 0;i<books.length;i++) {
    if(books[i].id === id) {
      books.splice(i, 1)
      i--
    }
  }
  console.log(books)
}
const Books = (props) => {
  const { img, title, author, id } = props
  return (
    <article style={{marginBottom: '20px'}}>
      <img src={img} alt=''></img>
      <h4>{title}</h4>
      <p>{author}</p>
      <button onClick={handleDelete.bind(this, id)}>删除</button>
    </article>
  )
}

ReactDOM.render(<BookList></BookList>, document.getElementById('root'))