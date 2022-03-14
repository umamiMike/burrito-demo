defmodule BurritosWeb.PageController do
  use BurritosWeb, :controller

  def index(conn, _params) do
    json(conn, %{burritos: "muy bueno!"})
  end
end
