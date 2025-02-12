import React, {ChangeEvent} from 'react'

import {Pagination} from '@mui/material'
import s from './SuperPagination.module.css'
import SuperSelect from "../../../hw07/common/c5-SuperSelect/SuperSelect";

export type SuperPaginationPropsType = {
    id?: string
    page: number
    itemsCountForPage: number
    totalCount: number
    onChange: (page: number, count: number) => void
}

const SuperPagination: React.FC<SuperPaginationPropsType> = (
    {
        page, itemsCountForPage, totalCount, onChange, id = 'hw15',
    }
) => {
    const lastPage = Math.ceil(totalCount / itemsCountForPage)

    const onChangeCallback = (event: ChangeEvent<unknown>, page: number) => {
        onChange(page, itemsCountForPage)
    }

    const onChangeSelect = (event: ChangeEvent<HTMLSelectElement>) => {
        onChange(page, +event.currentTarget.value);
    }

    return (
        <div className={s.pagination} style={{
            display: 'flex',
            justifyContent: 'space-between',
            height: '30px',
            marginBottom: '20px'
        }}>
            <Pagination
                id={id + '-pagination'}
                sx={{}}
                page={page}
                count={lastPage}
                onChange={onChangeCallback}
                hideNextButton
                hidePrevButton
            />

            <span className={s.text1} style={{fontSize: '16px', fontWeight: '500'}}>
                Показать
            </span>

            <SuperSelect
                id={id + '-pagination-select'}
                value={itemsCountForPage}
                options={[
                    {id: 4, value: 4},
                    {id: 7, value: 7},
                    {id: 10, value: 10},
                ]}
                onChange={onChangeSelect}
            />

            <span className={s.text2} style={{fontSize: '16px', fontWeight: '500'}}>
                строки в таблице
            </span>
        </div>
    )
}

export default SuperPagination
