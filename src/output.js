import React from "react";

const Output = ({ props }) => {
  return (
    <div className="bg-pink-200">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {props.map((item) => (
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key={item.recipe.id}>
                <a className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src={item.recipe.image}
                  />
                </a>
                <div className="mt-4">
                  <h3 className="text-green-500 text-xs tracking-widest title-font mb-1">
                    {item.recipe.mealType}
                  </h3>
                  <h2 className="text-red-900 title-font text-lg font-medium">
                    {item.recipe.label}
                  </h2>
                  <p className="mt-1">Total Calories: {Math.round(item.recipe.calories)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Output;
