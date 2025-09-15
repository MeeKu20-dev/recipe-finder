import logo from '../assets/logo.png'
import SearchForm from './SearchForm.jsx'

export default function Header({ onRecipesUpdate }) {
    return (
        <header className='max-w-full bg-amber-100 p-2'>
          <div className='mx-auto max-w-6xl grid grid-cols-1 items-center gap-3  sm:[grid-template-columns:auto_1fr_auto]'>
            <div className='flex items-center justify-center gap-x-2'>
              <img className='size-16 sm:size-15' src={logo} alt="logo" />
              <h1 className='text-2xl sm:text-3xl font-bold '>RECIPE FINDER</h1>
            </div>

            <div className='w-full sm:w-auto'>
              <SearchForm onRecipesUpdate={onRecipesUpdate} />
            </div>
          </div>
        </header>
    )
}