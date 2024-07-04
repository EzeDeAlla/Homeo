import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Sidebar from './sidebar'
import { postProperty } from '../redux/actions/actions'

const Properties = () => {
  const dispatch = useDispatch()

  const [name, setName] = useState('');
  const [zone, setZone] = useState('');
  const [price, setPrice] = useState(0);
  const [agent, setAgent] = useState('');
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([]);

  const handleFileChange = (e) => {
    setImages([...e.target.files]);
  };

  const handleType = (e) => {
    setType(e.target.value);
  }

  const handleSubmit = (e) => {
   
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('zone', zone);
      formData.append('price', price);
      formData.append('agent', agent);
      formData.append('houseType', type);
      formData.append('description', description);

      images.forEach(image => {
        formData.append('images', image);
      });

      dispatch(postProperty(formData));

      }
      catch (err) {
        console.log('err =>', err);
        throw(err);
    }
  }
  
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col h-2xl w-full m-10">
        <div className="flex-col">
          <h3 className="text-2xl font-bold mb-4 justify-center"> Propiedades </h3>
          <p> Esta es la secicon de Adminstracion de Propiedades. En esta espacio podras Publicar, Modificar y Eliminar Propiedades </p>
        </div>

        <div className="flex flex-row justify-center gap-24">
          <div className="bg-white border-4 rounded-lg shadow relative m-10 w-2/4 max-w-4xl p-6 mx-auto mt-20">
            <h1 className="text-xl font-bold text-gray-900 capitalize mb-6">
              Publicar Nueva Propiedad
            </h1>
            <form onSubmit={postProperty}>
              <div className="grid grid-cols-6 gap-6">
                  {/* Nombre De La Publicacion */}
                <div className="col-span-6 sm:col-span-3">
                  <label for="name" className="text-sm font-medium text-gray-900 block mb-2"> Nombre De La Publicacion </label>

                  <input value={name} onChange={(e) => setName(e.target.value)}
                    id="username" type="text" placeholder="Casa 3 Ambientes Belgrano"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"     
                  />

                </div>

                {/* Zona */}
                <div className="col-span-6 sm:col-span-3">
                  <label for="zone" className="text-sm font-medium text-gray-900 block mb-2"> Zona </label>

                  <input value={zone} onChange={(e) => setZone(e.target.value)}
                    id="zone" type="text" placeholder="Zona de la propiedad"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  />

                </div>

                  {/* Precio */}
                <div className="col-span-6 sm:col-span-3">
                  <label for="price" className="text-sm font-medium text-gray-900 block mb-2"> Precio </label>

                  <input value={price} onChange={(e) => setPrice(e.target.value)}
                    id="price" type="number" placeholder="Fijo: 1500 | Rango: 1500 - 2500"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  />

                </div>

                {/* Agente a cargo */}
                <div className="col-span-6 sm:col-span-3">
                  <label for="responsableAgent" className="text-sm font-medium text-gray-900 block mb-2"> Agente a cargo </label>

                  <input value={agent} onChange={(e) => setAgent(e.target.value)}
                    id="responsableAgent" type="text" placeholder="Puede estar vacio"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  />

                </div>

                {/* Tipo de Propiedad */}
                <div className="col-span-6 sm:col-span-3">
                  <label for="select" className="text-sm font-medium text-gray-900 block mb-2"> Tipo de Propiedad </label>

                  <select value={type} onChange={handleType}
                    id="select"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  >
                    <option value="">Seleccione un tipo</option>
                    <option value="purchase">Venta</option>
                    <option value="rent">Alquiler</option>
                    <option value="rent_and_purchase">Venta o Alquiler</option>
                  </select>
                </div>

                {/* Descripción */}
                <div className="col-span-full">
                  <label for="textarea" className="text-sm font-medium text-gray-900 block mb-2"> Descripcion </label>

                  <textarea value={description} onChange={(e) => setDescription(e.target.value)}
                    id="textarea"
                    rows="3"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                    placeholder="Descripcion de la publicacion.
                    Ejemplo:
                    Excelente casa remodelada en Belgrano con muebles incluidos,
                    5 Habitaciones
                    2 Baños
                    Patio"
                  ></textarea>
                </div>

                  {/* Imágenes */}
                <div className="col-span-6 sm:col-span-3">
                  <label for="file-upload" className="text-sm font-medium text-gray-900 block mb-2"> Imagenes de la Propiedad </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <label for="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-col-blue hover:text-blue-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-600">
                          <span className="">Upload a file</span>

                          <input multiple onChange={handleFileChange}
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            className="sr-only"
                          />

                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end mt-6">
                <button
                  onClick={handleSubmit}
                  type="button"
                  className="text-white bg-col-blue hover:bg-green-400 focus:ring-4 focus:ring-green-400 font-medium rounded-lg text-sm px-5 py-2.5"
                >
                  Publicar
                </button>
              </div>
            </form>
          </div>

          <div className="bg-white border-4 rounded-lg shadow relative p-6 mx-auto mt-20 m-10 w-2/4 max-w-4xl">
            <div className="flex items-start justify-between p-5 border-b rounded-t">
              <h3 className="text-xl font-semibold">Editar Propiedad</h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                data-modal-toggle="product-modal"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="p-6 space-y-6">
              <form action="#">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      for="product-name"
                      className="text-sm font-medium text-gray-900 block mb-2"
                    >
                      Bucar Propiedad a editar
                    </label>

                    <input
                      type="text"
                      name="product-name"
                      id="product-name"
                      placeholder="Nombre de la Publicacion"
                      required=""
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      for="category"
                      className="text-sm font-medium text-gray-900 block mb-2"
                    >
                      Nuevo Nombre de Publicacion
                    </label>
                    <input
                      type="text"
                      name="category"
                      id="category"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                      placeholder="Electronics"
                      required=""
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      for="category"
                      className="text-sm font-medium text-gray-900 block mb-2"
                    >
                      Nueva Zona
                    </label>
                    <input
                      type="text"
                      name="category"
                      id="category"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                      placeholder="Electronics"
                      required=""
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      for="price"
                      className="text-sm font-medium text-gray-900 block mb-2"
                    >
                      Nuevo Precio
                    </label>
                    <input
                      type="number"
                      name="price"
                      id="price"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                      placeholder="$2300"
                      required=""
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      for="brand"
                      className="text-sm font-medium text-gray-900 block mb-2"
                    >
                      Nuevo Agente a cargo
                    </label>
                    <input
                      type="text"
                      name="brand"
                      id="brand"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                      placeholder="Apple"
                      required=""
                    />
                  </div>
                  <div className="col-span-full">
                    <label
                      for="product-details"
                      className="text-sm font-medium text-gray-900 block mb-2"
                    >
                      Nueva Descripcion
                    </label>
                    <textarea
                      id="product-details"
                      rows="6"
                      placeholder="Details"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4"
                    ></textarea>
                  </div>
                </div>
              </form>
            </div>
            <div class="p-6 border-t border-gray-200 rounded-b flex justify-end">
              <button
                class="text-white bg-col-blue hover:bg-green-400 focus:ring-4 focus:ring-green-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                type="submit"
              >
                Publicar Cambios
              </button>
            </div>
          </div>
        </div>

        <div>
          <div className="col-span-6 sm:col-span-3">
            <label
              for="propertyDelete"
              className="text-lg font-medium text-gray-900 block mb-2"
            >
              Bucar Propiedad a Eliminar
            </label>
            <div className="flex flex-row gap-10">

              <input
                type="text"
                name="propertyDelete"
                id="propertyDelete"
                placeholder="Nombre de la Publicacion"
                required=""
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-2/5 p-2.5"
              />

              <button
                type="submit"
                className="text-white bg-red-500 hover:bg-red-800 focus:ring-4 focus:ring-red-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Properties
