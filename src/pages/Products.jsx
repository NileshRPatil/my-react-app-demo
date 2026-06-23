import { useForm } from "react-hook-form";

export default function Products() {

  const { register, handleSubmit, watch, formState:{errors} } = useForm()

  const onSubmit = (data) => {
    console.log(data);
  }

  // console.log("Watch", watch("name"));

  // console.log(errors.name)

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
          <input name="title" placeholder="Product name" {...register('name',{ required : "Name is required", pattern: { value : /^[A-Za-z\s]+$/, message:"Only letters allowed"} } )} />
          <br />
          { errors.name && <span className="error">{errors.name.message}</span> }
          <br />
          <input name="price" placeholder="Product price" {...register('price',{required:"Price is required", pattern: { value : /^[0-9/s]+$/, message:"Only numbers allowed"} })} />
          <br />
          { errors.price && <span className="error">{errors.price.message}</span> }
          <br />
          <textarea name="description" placeholder="Description" {...register('description')}></textarea>
          <br />
          <select  {...register("units")} multiple >
            <option value="">Select units</option>
            <option value="kg">KG</option>
            <option value="gms">Grams</option>
          </select>
          <br />
          <input type="checkbox" value="PHP"   {...register("skills")} />PHP
          <input type="checkbox" value="React"  {...register("skills")}/>React
          <input type="checkbox" value="NodeJS"  {...register("skills")} />NodeJS
          <br />
          <input type="radio" value="male"   {...register("gender")} />Male
          <input type="radio" value="female"  {...register("gender")}/>female
          <br />
          <input type="submit" value="Submit" />
          
      </form>
    </>    
  );
}