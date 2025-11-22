import React from 'react'
// import useCategory from '../../../hooks/useCategory';

const CategoryItem = ({item}) => {
//    const item = useCategory()
  return (
    <div>

        <div className="">
          <div className="shadow-xl border border-gray_100 w-full h-[276px] flex flex-col items-center gap-y-4   px-[28px] py-[24px] rounded-md  ">
            <picture >
            src={item?.image} 
            alt={item?.name}
          </picture>
          <h2 className='body_md_500 text-gray_900'>{ item ||"n/a"}</h2>
          </div>

        </div>
    </div>
  )
}

export default CategoryItem