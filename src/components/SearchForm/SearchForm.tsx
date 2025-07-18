import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import s from './SearchForm.module.css';

export default function SearchForm() {
  const { register, handleSubmit } = useForm({
    defaultValues: { query: '' },
  });
  const onSubmit = ({ query }: { query: string }) => {
    if (query.length > 0) {
      console.log('searching', query);
    } else {
      toast.warn('Please enter data to search');
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s.searchForm}>
      <div className={s.inputWrapper}>
        <input
          className={s.searchInput}
          type="text"
          {...register('query')}
          placeholder="Search"
        />
        <svg
          className={s.searchIcon}
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 15L11.3873 10.6667M7.03455 12.1529C6.24682 12.1651 5.46438 12.0299 4.73283 11.7552C4.00128 11.4805 3.33525 11.0717 2.77358 10.5527C2.21191 10.0337 1.76582 9.41485 1.46132 8.73225C1.15682 8.04964 1 7.31693 1 6.57681C1 5.83669 1.15682 5.10397 1.46132 4.42137C1.76582 3.73876 2.21191 3.11993 2.77358 2.60093C3.33525 2.08193 4.00128 1.67316 4.73283 1.39843C5.46438 1.1237 6.24682 0.988521 7.03455 1.00076C8.59684 1.01793 10.0889 1.613 11.1872 2.65692C12.2855 3.70084 12.9015 5.10943 12.9015 6.57719C12.9015 8.04495 12.2855 9.45354 11.1872 10.4975C10.0889 11.5414 8.59684 12.1364 7.03455 12.1536V12.1529Z"
            stroke="black"
            strokeWidth="1.90476"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </form>
  );
}
