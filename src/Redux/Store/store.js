import {configureStore} from '@reduxjs/toolkit'
import themeReducer from '../Features/ChangeThemeSlice'
import companyInfoReducer from '../Features/EmployerInfo'

export const store= configureStore({
    reducer:{
        theme:themeReducer,
        CompanyInfo:companyInfoReducer
    }
})