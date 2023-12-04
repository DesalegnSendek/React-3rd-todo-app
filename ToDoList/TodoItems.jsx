
import './CSS/TodoItems.css'
import check from './Collections/check.png'
import cross from './Collections/crossout.png'
import notTick from './Collections/not tick.jpeg'

const TodoItems = ({no,display,text,setTodos}) => {

  const deletes = (no)=>{
    let data=JSON.parse(localStorage.getItem("todos"))
    data=data.filter((todos)=>todos.no!==no);
    setTodos(data);
  }

const toggle = (no)=>{
  let data=JSON.parse(localStorage.getItem("todos"))
  for (let index = 0; index < data.length; index++) {
    if(data[index].no===no){
        if(data[index].display===''){
        data[index].display = "line-through"  
    }else{
      data[index].display = ""
    }
    break
    }
  }
  setTodos(data);
}


  return (
    <>
    <div className='todo-items'>
        <div className={`items-container ${display}`}  onClick={()=>{toggle(no)}}>
          {display===""? <img src={notTick} alt="" />:<img src={check} alt="" />}
          <div className="todo-items-tex">{text}</div>
        </div>
        <div className='cross-div'>
        <img src={cross} alt="" onClick={()=>{deletes(no)}} className='cross'/>
    </div>
    </div>

    
    </>
  )
}

export default TodoItems