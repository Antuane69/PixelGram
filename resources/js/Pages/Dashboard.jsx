import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Post from './Posts/Index';

export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Publicaciones</h2>}
        >
            <Head title="PixelGram" />

            <div className="py-12">
                <div className="flex">
                    <div className="ml-5 mr-2 sm:px-6 lg:px-8 space-y-6 w-2/3 overflow-hidden sm:rounded-lg content-center justify-center">
                        <div className="py-6 text-center justify-center rounded-lg bg-white shadow-md">
                            <form>
                                <p className="mb-6 font-bold text-lg">Haz una publicación:</p>
                                <div className="flex">
                                    <textarea name="Post" id="post-id" className="w-4/5 border-2 rounded-lg h-24 ml-7"></textarea>
                                    <button className="bg-green-800 text-white font-bold ml-8 mt-14 hover:bg-green-700 px-3 rounded-md">Publicar</button>
                                </div>
                            </form>
                        </div>
                        <div className="overflow-hidden rounded-lg p-6 bg-white shadow-sm">
                            <span className="p-6 text-gray-900 mt-4">You're logged in!</span>
                        </div>
                    </div>
                    <div className="w-1/3 mr-9 bg-white shadow-sm sm:rounded-lg content-center justify-center flex">
                        <div className=" mt-6">
                            <p>User Profile:</p>
                        </div>
                        <div className=" mt-6">
                            <span className="p-6 text-gray-900 mt-4">You're logged in!</span>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
