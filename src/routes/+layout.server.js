import { PUBLIC_BASE_URL } from "$env/static/public";
import { redirect } from '@sveltejs/kit';

export async function load({fetch, url}) {
  // List of routes to skip the load function
  const skipRoutes = ['/login'];

  // Check if the current route is in the skip list
  if (skipRoutes.some(route => url.pathname.startsWith(route))) {
    return {};
  }
  
  const response = await fetch(`${PUBLIC_BASE_URL}/user/current`, {
    method: "GET",
    redirect: "follow",
    credentials: "include",
  });
  console.log(`response status = ${response.status}`);
  if (response.redirected || response.status === 401 || response.status === 403) {
    throw redirect(302, '/login');
  }
  const currentUser = await response.json();
  return {
    currentUser
  }
}
