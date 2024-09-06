import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import OrderPage from "../pages/OrderPage/OrderPage";
import ProductDetailPage from "../pages/ProductDetailPage/ProductDetailPage";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import SignInPage from "../pages/SignInPage/SignInPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import TypeProductPage from "../pages/TypeProductPage/TypeProductPage";
import AboutUsPage from "../pages/AboutUsPage/AboutUsPage";

export const routes = [
    {
        path: '/',
        page: HomePage,
        isShowHeader: true,
        isShowFooter: true
    },
    {
        path: '/order',
        page: OrderPage,
        isShowHeader: true
    },
    {
        path: '/products',
        page: ProductsPage,
        isShowHeader: true,
        isShowFooter: true
    },
    {
        path: '/:type',
        page: TypeProductPage,
        isShowHeader: true,
        isShowFooter: true
    },
    {
        path: '/sign-in',
        page: SignInPage,
        isShowHeader: false
    },
    {
        path: '/sign-up',
        page: SignUpPage,
        isShowHeader: false
    },
    {
        path: '/product-details',
        page: ProductDetailPage,
        isShowHeader: true,
        isShowFooter: true
    },
    {
        path: '*',
        page: NotFoundPage
    },
    {
        path: '/about-us',
        page: AboutUsPage,
        isShowHeader: true,
        isShowFooter: true
    },
]