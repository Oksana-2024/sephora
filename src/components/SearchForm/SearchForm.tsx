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
        <img
          src="/public/search.svg"
          alt="Search icon"
          width={15}
          className={s.searchIcon}
        />
      </div>
    </form>
  );
}
