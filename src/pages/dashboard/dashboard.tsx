import * as React from 'react';
import { Card } from '../../components/card/card';
import { Navbar } from '../../Layout/Navbar/Navbar';
import { Sidebar } from '../../Layout/Sidebar/Sidebar';
import { ReactComponent as UserIcon } from '../../assets/svg/user-icon.svg'
import { ReactComponent as ActiveIcon } from '../../assets/svg/active-icon.svg'
import { ReactComponent as LoanIcon } from '../../assets/svg/loan-icon.svg'
import { ReactComponent as ArrowDown } from '../../assets/svg/arrow-down.svg'
import { ReactComponent as SavingIcon } from '../../assets/svg/savings-icon.svg'
import './dashboard.scss'
import { Table } from '../../components/table/table';
import { users_url } from '../../types/url';
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';



export function Dashboard () {
  const [users, setUsers] = useState<any>([])
  // const [currentPage, setCurrentPage] = React.useState(1)
  const [startIndex, setStartIndex] = useState(0);
  const pages: number[] = [10,20,30,40,50,60,70,80,90,100]
  const [rowsPerPage, setRowsPerPage] = useState(10)

  const totalPages = Math.ceil(users.length/ rowsPerPage)

  // const displaypage = (pageNumber: number) => {
  //   setCurrentPage(pageNumber)
  // }

  const handleClick = (event: any) => {
    const newOffset = (event.selected * rowsPerPage) % users.length;
    setStartIndex(newOffset);
  }
  
  // const startIndex = (currentPage - 1) * rowsPerPage
  const endIndex = startIndex + rowsPerPage
  // const endOffset = itemOffset + rowsPerPage;

  const getUserData = async () => {
    const apiResponse = await fetch(`${users_url}`);
    const data = apiResponse.json();
    // setUsers(data);
    return data
  }

  useEffect(() => {
    getUserData()
    .then(res => {
      setUsers(res)
      // console.log(res)
    })
  },[])

  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className='dashboard'>
        <p className='dashboard-title'>User</p>
        <div className="cards">
          <Card 
            icon = {<UserIcon />}
            title = 'users'
            digits = '2,453'
          />
          <Card 
            icon = {<ActiveIcon />}
            title = 'active users'
            digits = '2,453'
          />
          <Card 
            icon = {<LoanIcon />}
            title = 'users with loans'
            digits = '2,453'
          />
          <Card 
            icon = {<SavingIcon />}
            title = 'users with savings'
            digits = '2,453'
          />
        </div>
        <Table users = {users} startIndex = {startIndex} endIndex = {endIndex} />
        <div className='pagination'>
          <div>
            Showing <span><select name="" id="" onChange={(e) => {setRowsPerPage(Number(e.target.value))}}>
                {pages.map((page, id) => {
                  return(
                    <option key={id} value={`${page}`}>{page}</option>
                  )
                })}
              </select></span> out of {users.length}
          </div>
          <div>
            <ReactPaginate
             pageCount={totalPages}
             className={'paginate'}
             breakLabel='...'
             onPageChange={handleClick}
             nextLabel={<ArrowDown />}
             previousLabel= {<ArrowDown />}
             previousClassName = 'prev-paginate'
             nextClassName='next-paginate'
             activeLinkClassName='active-paginate'/>
          </div>
        </div>
      </div>
    </div>
  );
}
