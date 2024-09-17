import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, Link, usePage } from '@inertiajs/react';

export default function Index({ auth,posts,greeting }) {
    const { data, setData, post, processing, errors, reset, clearErrors } = 
    useForm("StorePost",{
        body: "",
    });

    const page = usePage();
    
    function submit(e) {
        e.preventDefault()
        post(route("posts.store"),{
            onSuccess: () => {
                reset("body");
            }
        })
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex w-full sticky z-100">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight w-full">Publicaciones
                    </h2>
                    <Link className="text-sm text-white bg-gray-800 px-3 py-3 rounded-lg font-bold whitespace-nowrap"
                        type="button"
                        href={route("posts.index")}
                        only={["posts"]}
                        disabled={processing}
                        preserveScroll
                        preserveState = {true}>Refrescar Posts
                    </Link> 
                </div>
            }
        >
            <Head title="PixelGram" />

            <div className="py-12">
                <div className="flex">
                    <div className="ml-5 mr-2 sm:px-6 lg:px-8 space-y-3 w-2/3 overflow-hidden sm:rounded-lg content-center justify-center">
                        <div className="bg-blue-900 text-white font-semibold px-4 py-4 rounded-lg text-lg text-center mb-6 uppercase">
                            {greeting}
                        </div>
                        {page.props.can.post_create && <div className="py-6 text-center justify-center rounded-lg bg-white shadow-md">
                            <form onSubmit={submit}>
                                <p className="mb-6 font-bold text-lg">Haz una publicación:</p>
                                <div className="flex">
                                    <textarea name="post" id="post-id" className="w-4/5 border-2 rounded-lg h-24 ml-7"
                                        onChange={e=>setData("body",e.target.value)}
                                        value={data.body}
                                        onFocus={()=>clearErrors("body")}>
                                    </textarea>
                                    <button className={`bg-green-800 text-white font-bold ml-8 mt-14 hover:bg-green-700 px-3 rounded-md ${processing && "opacity-50"}`}
                                    disabled={processing}>Publicar</button>
                                </div>
                                {errors.body && <p className="text-red-600 mt-4 font-bolder">{errors.body}</p>}
                            </form>
                        </div>}
                        {posts.map((post) => {
                            return(
                                <div className="overflow-hidden rounded-lg p-6 bg-white shadow-sm" key={post.id}>
                                    <div className="my-3">
                                        <p className="font-bold text-left content-center justify-center">{post.user.name}</p>
                                        <span className="p-6 text-gray-900 mt-4 text-justify">{post.body}</span>
                                    </div>
                                </div>  
                            )
                        })}
                    </div>
                    <div className="w-1/3 mr-9 bg-white shadow-sm sm:rounded-lg content-center justify-center flex">
                        <div className=" mt-6">
                            <p>Perfil del usuario:</p>
                        </div>
                        <div className=" mt-6">
                            <span className="p-6 text-gray-900 mt-4">{auth.user.name}</span>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
