defmodule ShopWeb.PageController do
  use ShopWeb, :controller

  def index(conn, _params) do
    json(conn, %{shops: "muy bueno!"})
  end
end
