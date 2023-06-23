import GridViewIcon from '@mui/icons-material/GridView';
import MenuIcon from '@mui/icons-material/Menu';
import './Sort.css'
import { useDispatch } from 'react-redux';
import { setGridView, setListView } from '../../Redux/Actions/product';
const Sort = () => {
  const dispatch = useDispatch()
  const gridViewHandler = () => {
    dispatch(setGridView())
  }
  const listViewHandler = () => {
    dispatch(setListView())
  }
  return (
    <div className='sort-section'>
      <GridViewIcon onClick={gridViewHandler} fontSize='medium' className='gird-icon'/>
      <MenuIcon onClick={listViewHandler} fontSize='medium' className='gird-icon'/>
    </div>
  )
}

export default Sort