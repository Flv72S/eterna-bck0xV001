"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useUser = useUser;
const react_1 = require("react");
const router_1 = require("next/router");
function useUser() {
    const [user, setUser] = (0, react_1.useState)(null);
    const [loading, setLoading] = (0, react_1.useState)(true);
    const router = (0, router_1.useRouter)();
    (0, react_1.useEffect)(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            setLoading(false);
            return;
        }
        const fetchUser = async () => {
            try {
                const response = await fetch('/api/auth/me', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                if (response.ok) {
                    const userData = await response.json();
                    setUser(userData);
                }
                else {
                    localStorage.removeItem('token');
                    router.push('/login');
                }
            }
            catch (error) {
                console.error('Error fetching user:', error);
                localStorage.removeItem('token');
                router.push('/login');
            }
            finally {
                setLoading(false);
            }
        };
        fetchUser();
    }, [router]);
    return { user, loading };
}
